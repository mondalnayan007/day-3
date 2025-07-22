// Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz"

for(var i = 1; i<= 50; i++)
    {
        if( i % 3 == 0  &&  i % 5 == 0)
        {
            console.log(i + " Nayan Mondal");
        }
        else if(i % 3 == 0)
        {
            console.log(i + " Nayan");
        }
        else if(i % 5 == 0)
        {
             console.log(i + " Mondal");
        }
        else{
            console.log(i);
        }
    } 