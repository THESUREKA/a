const fs=require('fs');
var add=function(title,body)
{
  var notes=[];
    var note={
        title:title,
        body:body
    };
    try{
    var read=fs.readFileSync('notes.json');
    notes=JSON.parse(read);
    }
   catch(e)
  {

  }
  notes.push(note);
      fs.writeFileSync('notes.json',JSON.stringify(notes));
}
module.exports=
{
 add  :add
};
