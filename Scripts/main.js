function Execute()
{
    WriteLine("----------\n");
    
    var jsToRun = editor.getValue();;

    try 
    {
        eval(jsToRun); 
    } 
    catch (e) 
    {
        WriteLine(e.message);
    }
}

var editor;

$( document ).ready(function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
});

