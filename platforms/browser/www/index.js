document.addEventListener("deviceready", onDeviceReady, false);
  
  function onDeviceReady() {

    navigator.notification.alert('listo');
    facebookConnectPlugin.getLoginStatus(function(d) {
      if (d.status === 'connected'){
        alert('login');
        // authResponse.accessToken
      } else {
        añert('ups');
      }
    }, function(){
      alert('error getLogin');
    });
  }

  var fbLoginSuccess = function (userData) {
    navigator.notification.alert('userdata');
    //alert("UserInfo: "+ userData);
    facebookConnectPlugin.getAccessToken(function(token) {
      navigator.notification.alert("Token: " + token);
      //alert("Token: " + token);
    });
  }

  
  /* =====================================================================================================
    BY PASS BUTTON
  ===================================================================================================== */

  document.getElementById('btnLogin').onclick = function(){
    //window.location = 'i/dash/card/index.html';
    facebookConnectPlugin.login(['public_profile', 'email', 'user_friends'], fbLoginSuccess,
      function (error) {
        console.error(error)
      }
    );
  };

  ///a/facebook/done?




