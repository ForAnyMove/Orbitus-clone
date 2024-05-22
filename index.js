const formList = Array.from(document.getElementsByClassName('elementor-form'));
formList.forEach(formElement => 
  formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var phone = document.getElementById('form-field-email').value;
    
    var data = {
        fields: {
            TITLE: 'Новый лид с формы',
            PHONE: [{VALUE: phone, VALUE_TYPE: 'WORK'}]
        }
    };
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://b24-ydta3n.bitrix24.eu/rest/1/i2i7zsa5gssywfv3/', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Заявка успешно отправлена!');
            document.getElementById('leadForm').reset();
        }
    };
    
    xhr.send(JSON.stringify(data));
  })
)