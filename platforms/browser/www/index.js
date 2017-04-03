  document.addEventListener("deviceready", onDeviceReady, false);
  
  function onDeviceReady() {
    //StatusBar.hide();
    /* =====================================================================================================
      VALID STATUS
    ===================================================================================================== */
    navigator.notification.alert('uno');
    facebookConnectPlugin.getLoginStatus(function(d) {   
      navigator.notification.alert('entra');
      if (d.status === 'connected'){
        // if (window.localStorage.getItem('step') === '1') {
        //   window.location='league.html';
        // } else {
        //   window.location='dash.html';
        // }
      }
    });

    /* =====================================================================================================
      LOGIN BUTTON
    ===================================================================================================== */
    //navigator.notification.alert('dos');
    document.getElementById('btnLogin').onclick = function(){
      facebookConnectPlugin.login(['public_profile', 'email', 'user_friends'], fbLoginSuccess,
        function (error) {
          navigator.notification.alert('Facebook no disponible.');
        }
      );
    };
  }

  function fbLoginSuccess(userData) {
    
    facebookConnectPlugin.getAccessToken(function(token) {
      check(token, function(d){
        var info;
        try {
          info = JSON.parse(d.currentTarget.responseText);
        }
        catch(err) {
          info = null;
        }

        if (info && info.name) {
          window.localStorage.setItem('name', info.name);
          window.localStorage.setItem('photo', info.photo);
          window.localStorage.setItem('url', info.url);
          window.localStorage.setItem('step', info.s);
          window.localStorage.setItem('id', info.id);
          if (info.s === '1') {
            window.location='league.html';
          } else {
            window.location='dash.html';
          }
        }

      });
      //
      
    });
  }


  
  /* =====================================================================================================
    GET SERVER DATA
  ===================================================================================================== */
  function check(token, cb) {
    let xhr =  new XMLHttpRequest;
    xhr.onload = cb;
    xhr.onerror = function(){ console.log('error xhr url'); };
    xhr.open('GET', 'https://soccerid.co/a/facebook/token?access_token='+token);
    xhr.send(null);
    return xhr;
  }












//navigator.notification.alert(JSON.stringify(d));
  ///a/facebook/done?

// facebookConnectPlugin.getLoginStatus(function(response){
//     if(response.status === 'connected'){
//         authenticate(response.authResponse.accessToken)
//     }
//     else {
//         facebookConnectPlugin.login(['email', 'public_profile'], function(response) {
//             authenticate(response.authResponse.accessToken);
//         }, function(err) {
//             $ionicPopup.alert({
//                 title: "Oops!",
//                 template: err.errorMessage || err
//             })
//         });
//     }
// });


