(function (window, document, undefined) {
  const priceBanner = document.querySelector('.price-banner');
  const orderForm = document.querySelector('#orderForm');
  const pancakeType = document.querySelector('#type');
  const checkboxes = document.querySelectorAll('.customization-section input[type="checkbox"]');
  const outputs = document.querySelectorAll('.total-price');

  function blinkBanner() {
    priceBanner.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.05)' },
        { transform: ' scale(1)' },
      ],
      {
        duration: 100,
        iterations: 1,
      }
    );
  }

  function calculatePrice() {
    let sum = Number(pancakeType?.value || 5);

    checkboxes?.forEach(checkbox => {
      if (checkbox.checked) {
        sum += Number(checkbox.value);
      }
    });

    outputs?.forEach(output => {
      output.textContent = sum;
    });

    blinkBanner();
  }

  function displayOrder() {
    const customerName = document.querySelector('#customerName');
    const orderType = document.querySelector('#order_type');
    const orderToppings = document.querySelector('#order_toppings');
    const orderExtras = document.querySelector('#order_extras');
    const orderName = document.querySelector('#order_name');
    const orderPrice = document.querySelector('#order_price');

    const toppings = [];
    const extras = [];
    let sum = Number(pancakeType?.value || 5);

    checkboxes?.forEach(checkbox => {
      const name = checkbox.dataset.name;
      const category = checkbox.dataset.category;

      if (checkbox.checked) {
        const value = checkbox.value;
        const line = `${name} – ${value}€`;
        sum += Number(value);

        if (category === 'toppings') {
          toppings.push(line);
        } else {
          extras.push(line);
        }
      }
    });

    orderType.textContent = pancakeType.selectedOptions[0].text;
    orderToppings.textContent = toppings.join(', ') || 'Ei';
    orderExtras.textContent = extras.join(', ') || 'Ei';
    orderName.textContent = customerName?.value || '';
    orderPrice.textContent = `${sum}€`;
  }

  pancakeType?.addEventListener('change', calculatePrice);

  checkboxes?.forEach(checkbox => {
    checkbox.addEventListener('change', calculatePrice);
  });

  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    displayOrder();
  });
})(window, document);

// const form = document.querySelector('.form-container');
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// const typeSelect = document.querySelector('#type');
// const button = document.querySelector('button');

// let total;
// let toppings = [];
// let extras = [];

// const pancakePriceCalc = () => {
//   const totalPriceElement = document.querySelector('#totalPrice');
//   const priceBanner = document.querySelector('.price-banner');

//   total = parseInt(typeSelect.value);
//   totalPriceElement.textContent = `$${ total }`;

//   checkToppings();

//   priceBanner.animate(
//     [
//       { transform: 'scale(1)' },
//       { transform: 'scale(1.05)' },
//       { transform: ' scale(1)' },
//     ],
//     {
//       duration: 100,
//       iterations: 1,
//     }
//   );
// };

// const addItem = (itemName, category) => {
//   if (category === 'toppings') {
//     toppings.push(itemName);
//   } else {
//     extras.push(itemName);
//   }
// };

// const checkToppings = () => {
//   toppings = [];
//   extras = [];

//   for (const item of checkboxes) {
//     const itemName = item.dataset.name;
//     const category = item.dataset.category;

//     if (item.checked) {
//       total += parseInt(item.value);
//       addItem(itemName, category);
//     } else {
//       removeItem(itemName, category);
//     }
//   }
//   console.log('toppings array', toppings);
//   console.log('extras array', extras);
// };

// const displayOrder = () => {
//   const customerName = document.querySelector('#customerName').value;
//   const orderType = document.querySelector('#order_type');
//   const orderToppings = document.querySelector('#order_toppings');
//   const orderExtras = document.querySelector('#order_extras');
//   const orderName = document.querySelector('#order_name');
//   const orderPrice = document.querySelector('#order_price');

//   orderType.textContent = typeSelect.selectedOptions[0].text;
//   orderToppings.textContent = toppings.join(', ');
//   orderExtras.textContent = extras.join(', ');
//   orderName.textContent = customerName;
//   orderPrice.textContent = total;
// };

// form.addEventListener('change', pancakePriceCalc);
// button.addEventListener('click', displayOrder);
