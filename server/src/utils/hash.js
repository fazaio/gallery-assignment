const bcrypt = require('bcrypt');

// do encrypt
bcrypt.hash('adminjs', 10, function(err, hash) {
    console.log(hash);
});

// check
bcrypt.compare('adminjs', '$2b$10$mNKQ7NlaxCHcDRODkYpaouFUBK3vfMHQW3yRmcu2SJ52gEiAah5zi', function (err, res){
    console.log(res);
})