
function logear(){

    use=document.getElementById("usuario").value;
    cla=document.getElementById("clave").value;

    if(use && cla)
	{
		$.ajax({
			type:'post',
			url:'../sistema_biblioteca/acceso',
			dataType:'json',
			data:{
                usuario:use,
                clave:cla
            },
			
			success:function(html)
			{	
				data=html;
				
				if(data.length>0)
				{
					alert("Bienvenido al sistema.....")
					location.href ="../sistema_biblioteca/menu_principal";
					
				}
				else{
					alert("Usuario desconocido....")
				}
			
			}
		});	
	}
	else{
		alert("Por favor ingrese su cuenta...")
	}
    

    
    
}