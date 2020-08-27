var lib;
$(document).ready(main);

function main(){
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });
    
}

$(document).ready(function(){
	
	autor();
	editorial();
	categoria();
	estado_libro();
	ejemplar_libro();
	cargar_ejemplares();

    $(".hamburger").click(function(){
        $(".wrapper").toggleClass("collapse");
    });
   
});


function autor(){
	$.ajax({
		type:'get',
		url:'../sistema_biblioteca/autor',
		dataType: "json",
		success:function(data){
			$("#autor").append('<option value="" selected="selected">Seleccione Autor</option>');
			$.each(data, function(key, data) {
				$("#autor").append('<option value=' + data.idautor + ' >' + data.descripcion + '</option>');
			});
		}
	})
}

function editorial(){
	$.ajax({
		type:'get',
		url:'../sistema_biblioteca/editorial',
		dataType: "json",
		success:function(data){
			$("#editorial").append('<option value="" selected="selected">Seleccione Editorial</option>');
			$.each(data, function(key, data) {
				$("#editorial").append('<option value=' + data.ideditorial + ' >' + data.descripcion + '</option>');
			});
		}
	})
}

function categoria(){
	$.ajax({
		type:'get',
		url:'../sistema_biblioteca/categoria',
		dataType: "json",
		success:function(data){
			$("#categoria").append('<option value="" selected="selected">Seleccione Categoria</option>');
			$.each(data, function(key, data) {
				$("#categoria").append('<option value=' + data.idcategoria + ' >' + data.descripcion + '</option>');
			});
		}
	})
}

function estado_libro(){
	$.ajax({
		type:'get',
		url:'../sistema_biblioteca/estado_libro',
		dataType: "json",
		success:function(data){
			$("#estado_libro").append('<option value="" selected="selected">Seleccione el Estado</option>');
			$.each(data, function(key, data) {
				$("#estado_libro").append('<option value=' + data.idestado_libro + ' >' + data.descripcion + '</option>');
			});
		}
	})
}

function ejemplar_libro(){
	$.ajax({
		type:'get',
		url:'../sistema_biblioteca/ejemplar_libro',
		dataType: "json",
		success:function(data){
			$("#ejemplar_libro").append('<option value="" selected="selected">Seleccione el Ejemplar</option>');
			$.each(data, function(key, data) {
				$("#ejemplar_libro").append('<option value=' + data.idejemplar_libro + ' >' + data.titulo + '</option>');
			});
		}
	})
}

function guardar_libro(){
	res=validar_libro();
	if(res[0]=="")
	{	//Guardamos
		//alert('Guardando...');
		$.ajax({
			type:'post',
			url:'../sistema_biblioteca/'+res[2],
			data:res[1]+"accion=guardar_libro",
			success:function(html)
			{	
				
				if(html>0)
					alert("El libro se encuentra registrado...")
				else
					alert("Registro guardado con exito......")
				//cargar_empleados();
				limpiaCampos2();	
			}
		});
	}
}


function guardar_ejemplar_libro()
{	res=validar_ejemplar();
	if(res[0]=="")
	{	//Guardamos
		//alert('Guardando...');
		$.ajax({
			type:'post',
			url:'../sistema_biblioteca/'+res[2],
			data:res[1]+"accion=guardar_ejemplar",
			success:function(html)
			{	
				
				if(html>0)
					alert("El Ejemplar se encuentra registrado...")
				else
					alert("Registro guardado con exito......")
				//cargar_empleados();
				limpiaCampos();
				cargar_ejemplares();	
			}
		});
	}
}

function validar_ejemplar()
{	
	id=document.getElementById("idejemplar_libro").innerHTML; 
	aut=document.getElementById("autor").value; 
	edi=document.getElementById("editorial").value; //$('#nombres').val();
	cat=document.getElementById("categoria").value; 
	des=document.getElementById("descripcion").value;
	tit=document.getElementById("titulo").value;
    
	datos=new Array(id,aut,edi,cat,des,tit);
	names=new Array("idejemplar_libro","autor","editorial","categoria","descripcion","titulo");
	nd=datos.length;
	
	msg="";
	for(i=0;i<nd;i++)
	{	if(datos[i]=="")
			msg+=names[i]+", ";
	}
	cad="";
	if(msg=="")
	{	
		
		cad=formatData(datos,names);
		if(parseInt(id)>0)
		{
			accion="accion=actualizar_ejemplar";
			action='actualizar_ejemplar'
			alert("Se actualizo el registro.....")
			
		}
		else{
			accion="accion=guardar_ejemplar";
			action='guardar_ejemplar';
		}	
		
		cad+=accion;
		
	}
	else
		alert("Falta ingresar: "+msg+"... ");
	return new Array(msg,cad,action);
}

function validar_libro()
{	
	id=document.getElementById("codlibro").innerHTML; 
	est=document.getElementById("estado_libro").value; 
	eje=document.getElementById("ejemplar_libro").value; 
	fec=document.getElementById("fecha_compra").value; 
	pre=document.getElementById("precio").value;
	
    
	datos=new Array(id,est,eje,fec,pre);
	names=new Array("codlibro","estado_libro","ejemplar_libro","fecha_compra","precio");
	nd=datos.length;
	
	msg="";
	for(i=0;i<nd;i++)
	{	if(datos[i]=="")
			msg+=names[i]+", ";
	}
	cad="";
	if(msg=="")
	{	
		
		cad=formatData(datos,names);
		if(parseInt(id)>0)
		{
			accion="accion=actualizar_libro";
			action='actualizar_libro'
			alert("Se actualizo el registro.....")
			
		}
		else{
			accion="accion=guardar_libro";
			action='guardar_libro';
		}	
		
		cad+=accion;
		
	}
	else
		alert("Falta ingresar: "+msg+"... ");
	return new Array(msg,cad,action);
}

function limpiaCampos(){
    $('#idejemplar_libro').html(0);
	$('#descripcion').val('');
	$('#titulo').val('');
	
		
}
function limpiaCampos2(){
    $('#idejemplar_libro').html(0);
	$('#fecha_compra').val('');
	$('#precio').val('');
	
		
}

function formatData(dat,nam)
{	nd=dat.length;
	cad="";
	for(i=0;i<nd;i++)
		cad+=nam[i]+"="+dat[i]+"&";
	//alert("formateando...")
	return cad;
}

function cargar_ejemplares()
{
	
	$.ajax({
		type:'post',
		url:'../sistema_biblioteca/listarejemplar',
		dataType:'json',
		success:function(html)
		{		
			
				//console.log(html)
				data = html;
	            tablaejemplares(data);
			
				
				//limpiaCampos();
		},
		
	});

}

function tablaejemplares(data)
{
	table= "<table id='grilla_ejemplares' class='table table-bordered active'><thead><tr class='thead-dark'><th>ID</th><th>AUTOR</th><th>EDITORIAL</th><th>CATEGORIA</th><th>TITULO</th><th>DESCRIPCION</th><th>ACCION</th></tr></thead><tbody>";
	
   if(data.length)
   {                 
	   for(var i = 0;i < data.length;i++)
	   { 
	   table +="<tr><td>" + data[i].idejemplar_libro + "</td><td>" + data[i].autor + "&nbsp;</td><td>" + data[i].editorial + "</td>"
	   table +="<td>" + data[i].categoria + "</td><td>"+data[i].titulo+"</td><td>"+data[i].descripcion+"</td>"
	   
	   table +="<td><button type='button' class='btn btn-info' data-toggle='modal' data-target='#staticBackdrop' >Agregar libro</button></td></tr>";
	     
	  
	 
	   }
	   //$('actualizar').click($('#exampleModal').modal(options));

   }
   table += "</tbody></table>";
   $('#ListaDetalle').html(table);	
   
   
}

function buscar_titulo(buscar_t)
{	
	if(buscar_t=='0')
	{
		buscar_t=document.getElementById("buscar_t").value;
	}
	
	if(buscar_t)
	
	{
		$.ajax({
			type:'post',
			url:'../sistema_biblioteca/buscarxtitulo',
			dataType:'json',
			data:"buscar_t="+buscar_t,
			success:function(html)
			{	
				
				lib=html;
                
                if(lib.length>0)
				{
					showEjemplar(0);
				}
				else
					alert("Ejemplar no registrado....")
			}
		});	
	}
	else{
		alert("Ingrese un documento....")
	}
	
}

function showEjemplar(fila){
    $('#idejemplar_libro').html(lib[fila].idejemplar_libro);
	$('#autor').val(lib[fila].autor);
	$('#editorial').val(lib[fila].editorial);
	$('#categoria').val(lib[fila].categoria);
	$('#titulo').val(lib[fila].titulo);
	$('#descripcion').val(lib[fila].descripcion);
	
}







