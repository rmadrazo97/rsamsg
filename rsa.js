const primality = require("primality")
var rsa = module.exports = {
    prime_number: function () {
        var start = false 
        while(!start){
            var numero = Math.floor(Math.random() * 10000) + 1000
            if(primality(numero)){
                start = true
            }
        }
        return numero
    },
    find_n: function (){
        var p = this.prime_number();
        var q = this.prime_number();
        //console.log("P: "+p);
        //console.log("Q: "+q);
        var start = false
        while(!start){
            if(p != q){
                start = true
            }else{
                q = this.prime_number()
            }
        }
        var respuesta = [p,q,p*q]
        return respuesta
    },
    gcd: function(a,b){
        var x = a;
        var y = b;
        while(y!=0){
            var r = x%y
            x = y
            y = r
        }
        return x
    },
    lcm: function(a,b){
        return (a*b)/this.gcd(a,b)
    },
    find_e: function(p,q){
        var phi = this.lcm(p-1,q-1)
        for (var i = 2;i<phi;i++){
            if(this.gcd(i,phi) == 1){
                var ephi = [i,phi]
                return ephi
            }
        }
    },
    find_d: function(arr){
        var e = arr[0]
        var phi = arr[1]
        for(var i=2;i<phi;i++){
            if(e*i%phi == 1){
                return i
            }
        }
    },
    expon: function(b,n,m){
        n = n.toString(2);
        x = 1;
        power = b%m;
        for(var i = (n.length-1);i>=0;i--){
            if(n.charAt(i)==1){
                x = (x*power)%m
            }
            power = (power*power)%m
        }
        return x
    },
    enc: function(n,e,m){
        return this.expon(m,e,n);
    },
    dec: function(c,d,n){
        return this.expon(c,d,n)
    }

}