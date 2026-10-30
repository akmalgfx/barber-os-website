// Validates and submits any form marked [data-form]. Posts JSON to the endpoint in
// data-endpoint; an empty endpoint means the form isn't connected yet, and says so.
export function mountForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach((form) => {
    const status = form.querySelector<HTMLElement>('[data-status]');
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const done = form.parentElement?.querySelector<HTMLElement>('[data-done]');

    const check = (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
      const field = el.closest('.field');
      const err = field?.querySelector<HTMLElement>('.field__err');
      let msg = '';
      if (el.validity.valueMissing) msg = 'Please fill this in.';
      else if (el.validity.typeMismatch && el.type === 'email') msg = 'Enter an email like name@shop.com.';
      else if (el.validity.patternMismatch) msg = 'Enter a phone number with at least 10 digits.';
      field?.classList.toggle('is-invalid', !!msg);
      if (err) err.textContent = msg;
      return !msg;
    };

    const inputs = [...form.querySelectorAll<HTMLInputElement>('input, select, textarea')].filter((i) => i.name);
    inputs.forEach((el) => {
      el.addEventListener('blur', () => { if (el.value) check(el); });
      el.addEventListener('input', () => { if (el.closest('.is-invalid')) check(el); });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const bad = inputs.filter((el) => !check(el));
      if (bad.length) { bad[0].focus(); return; }
      if (status) { status.textContent = ''; status.classList.remove('is-error'); }

      // Honeypot: real people never fill the hidden field.
      if (form.querySelector<HTMLInputElement>('[name="company_site"]')?.value) {
        form.hidden = true;
        if (done) done.hidden = false;
        return;
      }

      const endpoint = form.dataset.endpoint;
      if (!endpoint) {
        if (status) {
          status.textContent = "This form isn't connected yet. Please email us through the support portal.";
          status.classList.add('is-error');
        }
        return;
      }
      btn?.setAttribute('aria-busy', 'true');
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        });
        if (!res.ok) throw new Error(String(res.status));
        form.hidden = true;
        if (done) { done.hidden = false; done.focus(); }
      } catch {
        if (status) {
          status.textContent = "Something went wrong and your message wasn't sent. Please try again.";
          status.classList.add('is-error');
        }
      } finally {
        btn?.removeAttribute('aria-busy');
      }
    });
  });
}
