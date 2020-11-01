for(let i = 0; i <= 100; i++)
{
    if ( i % (3 * 5) == 0)
    {
        console.log( i + " " + "FizzBizz");
    }
    else if ( i % 3 == 0)
    {
        console.log( i + " " + "Fizz");
    }
    else if ( i % 4 == 0)
    {
        console.log( i + " " + "Bizz");
    }
}