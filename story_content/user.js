function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5v4eju8qCmq":
        Script1();
        break;
      case "5Xk6j3grsfQ":
        Script2();
        break;
  }
}

function Script1()
{
  
               var field3 =1;
 
                $.ajax({
                url: "https://docs.google.com/forms/d/1N9UGxJBvBSglj3ozn7mQdR_64EZtRwFDNlEgnRpQ1Ow/formResponse",
                data: {"entry.897097011": field3}.submit(),
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function() {
                        //Success message
                    },
                    200: function() {
                        //Success Message
                    }
                }
            });

         $(document).ready(function(){
                $('#form').submit(function() {
                    postToGoogle();
                    return false;
                });
            });

}

function Script2()
{
              $(document).ready(function(){
                $('#form').submit(function() {
                    postToGoogle();
                    return false;
                });
            });
}

