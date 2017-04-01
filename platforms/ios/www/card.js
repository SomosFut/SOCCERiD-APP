document.addEventListener('deviceready', function(){
  //navigator.notification.alert('ready card');
  facebookConnectPlugin.getLoginStatus(function(d) {
    if (d.status === 'connected'){
      processCont(window.localStorage.getItem('name'), window.localStorage.getItem('photo'), window.localStorage.getItem('url'), 'F');
    } else {
      window.location = 'index.html';
    }
  });

}, false);


/* =====================================================================================================
  DONE
===================================================================================================== */
function processCont(name, photo, url, sn) {
  $('#photo').attr('src', photo);
  $('#name').text(name);
  $('#linkprof').attr('href', 'profile.html');

  $('#namebox').val(name.replace(/[^\w\sñÑáéíóúÁÉÍÓÚ]/gi, '').slice(0,22)).keyup(function(){
    this.value = this.value.replace(/[^\w\sñÑáéíóúÁÉÍÓÚ]/gi, '').slice(0,22);
  })


  $('#urlbox').val(name.toLowerCase()
    .replace(/á/gi,"a").replace(/é/gi,"e").replace(/í/gi,"i").replace(/ó/gi,"o").replace(/ú/gi,"u").replace(/ñ/gi,"n")
    .replace(/[^\w]/gi, '').slice(0,50)).keyup(function(){
    this.value = this.value.replace(/[^\w]/gi, '').toLowerCase().slice(0,50);
    //

    var self = this;

    $.get('https://soccerid.co/a/check?url='+this.value+'applink='+window.localStorage.getItem('id'))
      .done(function(d) {
        if (d === 'not' || d === 'owner'){
          $(self).parent().removeClass('has-error');
        }else{
          $(self).parent().addClass('has-error');
        }
      })

  });


  $('#ofbox, #defbox, #numbox').change(function(){
    this.value = isNaN(parseInt(this.value)) ? 1 : parseInt(this.value);
  });

  // checar info
  
  $.get('https://soccerid.co/a/getcard?applink='+window.localStorage.getItem('id'), function(d){
    if(d){
      var data = JSON.parse(d);
      

      $('#namebox').val(data.name);
      $('#urlbox').val(data.customUrl);
      $('#numbox').val(data.num);
      $('#posbox').val(data.pos);
      $('#defbox').val(data.def);
      $('#ofbox').val(data.of);
      $('#countrybox').val(data.ctry);

    }
    
  });



  $('#btnsave').click(function(e){
    e.preventDefault();
    $(this).attr('disabled', 'disabled');

    var info = {
      name : $('#namebox').val(),
      url : $('#urlbox').val(),
      num : $('#numbox').val(),
      pos : $('#posbox').val(),
      def : $('#defbox').val(),
      of : $('#ofbox').val(),
      ctry : $('#countrybox').val()
    };

    info.applink = window.localStorage.getItem('id');

    $.get('https://soccerid.co/a/card', info)
      .done(function(d) {
        if ('exist' === d) return;
        //document.cookie = 'url=/'+$('#urlbox').val()+'; path=/';
        url = window.localStorage.setItem('url', info.url);
        location.href = 'card_ok.html';
      })
      .fail(function() {
        location.href = 'index.html';
      });
  });
}

