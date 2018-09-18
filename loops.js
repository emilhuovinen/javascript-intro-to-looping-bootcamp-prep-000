const array = [];

function forLoop(array) {

  for (let i = 0; i <  25; i++) {
    if ( i === 1 ) {
      array.push(`I am 1 strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}


function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log( --countdown )
  }
  return 'done'
}

<<<<<<< HEAD

=======
var i = 0;
>>>>>>> 59f0299369f9a08378f9d536327df6029b627ed2



function doWhileLoop(array) {
  
  function incrementVariable() {
<<<<<<< HEAD
  array.length = array.length - 1;
=======
  i = array.length > 0 && incrementVariable()
>>>>>>> 59f0299369f9a08378f9d536327df6029b627ed2
}
  
  do {
    incrementVariable();
<<<<<<< HEAD
  } while (array.length > 0 && incrementVariable());
=======
  } while ( array.length > 0 && incrementVariable());
>>>>>>> 59f0299369f9a08378f9d536327df6029b627ed2

return array  

}