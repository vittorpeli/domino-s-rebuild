let modal, btn, span, deliveryBtn, storeBtn, deliveryOption

modal = document.getElementById('orderModal');
btn = document.getElementById('openOrderModal');
span = document.getElementsByClassName('close')[0];
storeBtn = document.getElementById('storeBtn');
deliveryBtn = document.getElementById('deliveryBtn');
deliveryOption = document.getElementById('deliveryOption');

function openOrderModal(choice) {
  modal.style.display = 'block';

  if (choice === 'delivery') {
    deliveryOption.value = 'delivery';
  }else {
    deliveryOption.value = 'loja';
  }

  toggleAddressField();
}

deliveryBtn.addEventListener('click', function() {
  openOrderModal('delivery');
})

storeBtn.addEventListener('click', function() {
  openOrderModal('loja')
})

btn.onclick = () => {
  modal.style.display = 'block';
}

span.onclick = () => {
  modal.style.display = 'none';
}

window.onclick = (event) => {
  if(event.target == modal) {
    modal.style.display = 'none';
  }
}

function toggleAddressField() {
  let deliveryOption = document.getElementById('deliveryOption');
  let addressField = document.getElementById('addressField');

  function updateAdressField() {
    if(deliveryOption.value === 'delivery') {
      addressField.style.display = 'block';
    }else {
      addressField.style.display = 'none';
    }
  }

  updateAdressField();

  deliveryOption.addEventListener('change', function() {
    if (this.value === 'delivery') {
      addressField.display = 'block';
    } else {
      addressField.style.display = 'none';
    }
  })
}

document.addEventListener('DOMContentLoaded', function() {
  toggleAddressField();
})
