function PGPDecryption(){
  var MSG = document.getElementById('composeText').value;
  var passphrase = 'super long and hard to guess secret'
  //get ciphertext here
  var options, decrypted;
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
      //copied in decryption methods here
      privKeyObj.decrypt(passphrase);
      options = {
          message: openpgp.message.readArmored(encrypted),  //parse armored message
          publicKeys: openpgp.key.readArmored(pubkey).keys,  // for verification
          privateKeys: privKeyObj // for decryption
      };
      openpgp.decrypt(options).then(function(plaintext) {
          var decrypted = plaintext.data;
          this post request, uses a data name for the information being sent.
          $.post('/textReader',{data: encrypted,person: "person1"},function(data){
              console.log(data);
          });
         console.log(decrypted)
         alert(decrypted);

      /////////////////////////////////////////////

      });

  });

}
