$(document).ready(function () {
	//#region Navegação
	$("#btnInicio").on("click", function () {
		window.location.href = "/";
	});

	$("#btnTipoCurso").on("click", function () {
		window.location.href = "/tipocurso";
	});

	$("#btnCoordenador").on("click", function () {
		window.location.href = "/coordenador";
	});

	$("#btnAluno").on("click", function () {
		window.location.href = "/aluno";
	});

	$("#btnCurso").on("click", function () {
		window.location.href = "/curso";
	});
	//#endregion

	//#region Coordenador
	$(".btnDeletarCoordenador").on("click", function () {
		let resposta = confirm("Deseja realmente deletar?");
		if (resposta) {
			if (this.value != "") {
				var valor = this.value;
				$.ajax({
					url: "/coordenador/" + valor,
					type: "DELETE"
				})
				.done(function () {
					window.location.href = "/coordenador";
				});
			}
		}
	});

	$(".btnAtualizarCoordenador").on("click", function () {
		let resposta = confirm("Deseja realmente atualizar?");
		if (resposta) {
			let valor = this.value;
			$.ajax({
				url: "/coordenador/" + valor,
				type: "GET",
				success: function (data) {
					$("#id").val(data.id);
					$("#nome").val(data.nome);
					$("#sobrenome").val(data.sobrenome);
					if (Boolean(data.ativo)) {
						$("#ativo").prop("checked", true);
					} else {
						$("#ativo").prop("checked", false);
					}
				}
			});
		}
	});

	$("#frmCoordenador").on("submit", function(e) {
		e.preventDefault();
		var form = $(this);
		$.ajax({
			url: "/coordenador",
			type: "POST",
			data: {
				id: form.find("input[name='id']").val(),
				nome: form.find("input[name='nome']").val(),
				sobrenome: form.find("input[name='sobrenome']").val(),
				ativo: form.find("input[name='ativo']").prop("checked") ? true : false
			}
		})
		.done(function() {
			window.location.href = "/coordenador";
		});
	});
	//#endregion

	//#region TipoCurso
	$(".btnDeletarTipoCurso").on("click", function () {
		let resposta = confirm("Deseja realmente deletar?");
		if (resposta) {
			if (this.value != "") {
				var valor = this.value;
				$.ajax({
					url: "/tipocurso/" + valor,
					type: "DELETE"
				})
				.done(function () {
					window.location.href = "/tipocurso";
				});
			}
		}
	});

	$(".btnAtualizarTipoCurso").on("click", function () {
		let resposta = confirm("Deseja realmente atualizar?");
		if (resposta) {
			let valor = this.value;
			$.ajax({
				url: "/tipocurso/" + valor,
				type: "GET",
				success: function (data) {
					$("#id").val(data.id);
					$("#identificacao").val(data.identificacao);
					if (Boolean(data.ativo)) {
						$("#ativo").prop("checked", true);
					} else {
						$("#ativo").prop("checked", false);
					}
				}
			});
		}
	});

	$("#frmTipoCurso").on("submit", function(e) {
		e.preventDefault();
		var form = $(this);
		$.ajax({
			url: "/tipocurso",
			type: "POST",
			data: {
				id: form.find("input[name='id']").val(),
				identificacao: form.find("input[name='identificacao']").val(),
				ativo: form.find("input[name='ativo']").prop("checked") ? true : false
			}
		})
		.done(function() {
			window.location.href = "/tipocurso";
		});
	});
	//#endregion
});
