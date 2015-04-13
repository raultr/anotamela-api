var request = require('supertest'); //esta libreria hace una solicitud request al servidor http  y examina los resultados del cuerpo. 
var api = require('../server.js'); //para poder correr las pruebas con diferentes hosts
var host = process.env.API_TEST_HOST || api;

request = request(host);

describe('recurso /notas', function(){

	describe('POST', function(){
		it('deberia crear una nota nueva',function(){
			var data = {
			"nota": {
				"title": "Mejorandola",
				"description": "Introduccion a clase",
				"type": "js",
				"body": "soy el cuerpo de json",
			  }
		    };
	//Aqui se esta usando la libreria de supertest
	   request
	   		.post('/notas')
	   		.set('Acept','aplication/json')
	   		.send(data)
	   		.expect(201)
	   		.expect('Content-Type', /aplication\/json/)
	   		.end(function(err,res){
	   			var body = res.body;
	   			expect(body).to.have.property('notas');
	   		});
	   	});
	});
});