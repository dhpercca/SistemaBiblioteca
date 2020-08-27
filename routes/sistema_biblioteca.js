exports.frmlogin= function(req, res){
  res.render('frmlogin',{page_title:"Biblioteca"});
  console.log('se cargo correctamente')
};

exports.menu_principal= function(req, res){
  res.render('menu_principal',{page_title:"Menu"});
  console.log('se cargo correctamente')
};

exports.registrar_libro= function(req, res){
  res.render('registrar_libro',{page_title:"Libro"});
  console.log('se cargo correctamente')
};

exports.validar_prestamos= function(req, res){
  res.render('validar_prestamos',{page_title:"Prestamos"});
  console.log('se cargo correctamente')
};

exports.prestamos= function(req, res){
  res.render('prestamos',{page_title:"Prestamo"});
  console.log('se cargo correctamente')
};


exports.acceso = function(req, res){
  	
  var input = JSON.parse(JSON.stringify(req.body));
  req.getConnection(function(err,connection){
        
          usuario=input.usuario, 
          clave=input.clave    
        
        
        var query = connection.query('SELECT usuario,clave,tipo_usuario FROM usuario WHERE usuario = ? and clave = ?',[usuario,clave],function(err,rows)
        
        {
            if(err)
                console.log("Error Selecting : %s ",err );
                
      json = res.json(rows);
      //res.json(rows.length);
            
        //console.log(json);
          });
    console.log(query.sql);
    });
  
};

exports.autor = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM autor',function(err,rows)
        {
            if(err)
              console.log("Error Selecting : %s ",err );
          res.json(rows);
          //res.json(rows.length);
         });
      });
  
};

exports.editorial = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM editorial',function(err,rows)
        {
            if(err)
              console.log("Error Selecting : %s ",err );
          res.json(rows);
          //res.json(rows.length);
         });
      });
  
};

exports.categoria = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM categoria',function(err,rows)
        {
            if(err)
              console.log("Error Selecting : %s ",err );
          res.json(rows);
          //res.json(rows.length);
         });
      });
  
};

exports.estado_libro = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM estado_libro',function(err,rows)
        {
            if(err)
              console.log("Error Selecting : %s ",err );
          res.json(rows);
          //res.json(rows.length);
         });
      });
  
};

exports.ejemplar_libro = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM ejemplar_libro',function(err,rows)
        {
            if(err)
              console.log("Error Selecting : %s ",err );
          res.json(rows);
          //res.json(rows.length);
         });
      });
  
};

exports.guardar_ejemplar= function(req, res){	
  var input = JSON.parse(JSON.stringify(req.body));
  req.getConnection(function(err,connection){
       var reg1= {titulo: input.titulo};
       var reg= 
       {
        autor: input.autor,
        editorial: input.editorial,
        categoria: input.categoria,
        descripcion: input.descripcion,
        titulo: input.titulo
      
        };
        //console.log(reg);
        var query1 = connection.query('SELECT * FROM ejemplar_libro WHERE ?',reg1,function(err,rows){
          contador = rows.length
          if(contador == 0 )
          {
            var query = connection.query('INSERT INTO ejemplar_libro set ?',reg,function(err,rows)
            {
                if(err)
                    console.log("Error Selecting : %s ",err );
                    res.redirect('sistema_biblioteca/registrar_libro');
            
            });

          }
          else
          {
            //res.redirect('clientes/frmcliente');
            res.json(contador);
            console.log('registro_duplicdo')
          }
        });

              
           //console.log(query.sql)
    });
  
};

exports.actualizar_ejemplar = function(req,res){
    
  var input = JSON.parse(JSON.stringify(req.body));
  //var id = req.params.id;
  idejemplar_libro=input.idejemplar_libro;
  //console.log(idcliente);
  req.getConnection(function (err, connection) {
      
      var data = {
        autor: input.autor,
        editorial: input.editorial,
        categoria: input.categoria,
        descripcion: input.descripcion,
        //titulo: input.titulo,         
      };
      connection.query("UPDATE ejemplar_libro set ? WHERE idejemplar_libro = ? ",[data,idejemplar_libro], function(err, rows)
      {
        if (err)
            console.log("Error Updating : %s ",err );
            //res.redirect('/customers');
      });
  
  });
};

exports.guardar_libro= function(req, res){	
  var input = JSON.parse(JSON.stringify(req.body));
  req.getConnection(function(err,connection){
       
       var reg= 
       {
        estado_libro: input.estado_libro,
        ejemplar_libro: input.ejemplar_libro,
        fecha_compra: input.fecha_compra,
        precio: input.precio
             
        };
        //console.log(reg);          
        var query = connection.query('INSERT INTO libro set ?',reg,function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
                res.redirect('sistema_biblioteca/registrar_libro');
        
        });
             
    });
  
};

exports.actualizar_libro = function(req,res){
    
  var input = JSON.parse(JSON.stringify(req.body));
  //var id = req.params.id;
  idlibro=input.idlibro;
  //console.log(idcliente);
  req.getConnection(function (err, connection) {
      
      var data = {
        estado_libro: input.estado_libro,
        //ejemplar_libro: input.ejemplar_libro,
        fecha_compra: input.fecha_compra,
        precio: input.precio      
      };
      connection.query("UPDATE libro set ? WHERE idlibro = ? ",[data,idlibro], function(err, rows)
      {
        if (err)
            console.log("Error Updating : %s ",err );
            //res.redirect('/customers');
      });
  
  });
};

exports.listarejemplar = function(req, res){
  //var dni = req.params.dni;	
  //var input = JSON.parse(JSON.stringify(req.body));
  req.getConnection(function(err,connection){
       //var registro= {dni: input.dni};
        var query = connection.query('select ejemplar_libro.idejemplar_libro, autor.descripcion as autor,editorial.descripcion as editorial ,categoria.descripcion as categoria,ejemplar_libro.descripcion,ejemplar_libro.titulo  from (((ejemplar_libro inner join autor on ejemplar_libro.autor=autor.idautor)  inner join editorial on ejemplar_libro.editorial=editorial.ideditorial) inner join categoria on ejemplar_libro.categoria=categoria.idcategoria)',function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
             res.json(rows);
      res.json(rows.length);
           
        //console.log(json);
         });
    //console.log(query.sql);
    });
  
};

exports.buscarxtitulo = function(req, res){
  //var dni = req.params.dni;	
  var input = JSON.parse(JSON.stringify(req.body));
  req.getConnection(function(err,connection){
       var registro= {buscar_t: input.buscar_t};
       console.log(registro);
        var query = connection.query('SELECT * FROM ejemplar_libro WHERE ?',registro,function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
      json = res.json(rows);
      //res.json(rows.length);
           
        //console.log(json);
         });
    console.log(query.sql);
    });
  
};
