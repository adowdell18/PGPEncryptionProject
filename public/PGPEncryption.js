function PGPEncryption(){
  var MSG = document.getElementById('composeText').value;
  var options, encrypted;
  var options = {
      userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
      numBits: 4096,                                            // RSA key size
      passphrase: 'super long and hard to guess secret'         // protects the private key
  };

  openpgp.generateKey(options).then(function(key) {//then means come back to later
      var privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
      var pubkey = key.publicKeyArmored;
      var passphrase = 'super long and hard to guess secret'; //what the privKey is encrypted with
      var privKeyObj = openpgp.key.readArmored(privkey).keys[0];
      privKeyObj.decrypt(passphrase);
      options = {
          data: MSG,                             // input as String (or Uint8Array)
          publicKeys: openpgp.key.readArmored(pubkey).keys,  // for encryption
          privateKeys: privKeyObj // for signing (optional)
      };
      openpgp.encrypt(options).then(function(ciphertext) {
          encrypted = ciphertext.data;
          //this post request, uses a data name for the information being sent.
          $.post('/textWriter',{data: encrypted,person: "person1"},function(data){
              console.log(data);
          });
         console.log(encrypted)
         alert(encrypted);
          // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
      });
       // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
  });

}
