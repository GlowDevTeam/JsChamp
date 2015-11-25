function Execute()
{
    WriteLine("----------\n");
    
    var jsToRun = $('#jsInput').val();
    
    try 
    {
        eval(jsToRun); 
    } 
    catch (e) 
    {
        WriteLine(e.message);
    }
}