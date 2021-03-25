var y = prompt('whats your name?');
alert('Hello Lets make sure you are not a robot, ' +y)
var x = prompt("x=1+4, the value of x is :")
if (x == '5') 
{
    alert("you can now visit our website, Enjoy ");
    var fav = prompt('Now let us know what your is your favourte game ?' , 'Cyberpunk 2077,League of legends,Dota');
    document.write('<h3>' +fav+'</h3>')
    if (fav === 'Cyberpunk 2077')
    { document.write('<img src ="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/download2526.jpg">')
    alert('you have choosen a fantastic game ' +y)}
    else if (fav === 'League of legends') 
    {document.write('<img src ="https://miro.medium.com/max/3760/1*JzJBaliMfb9R_kEAPQaw5g.png">' ) 
    alert('you have choosen a fantastic game ' +y)}
    else if (fav === 'Dota') {document.write('<img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/mistwoods_blog_dsflkjsdalfkj.jpg">')
    alert('you have choosen a fantastic game ' +y)}
}
else alert('Hello Robot , you can only view our basic content :) ')

