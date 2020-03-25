$(document).ready(function() {
    //#region Navegação
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

	$("#btnSair").on("click", function () {
		window.location.href = "/autenticar/sair";
	});
    //#endregion
    
	$.ajax({
		url: "/curso/coordenador",
		type: "GET",
		success: function (data) {
			for (var i = 0; i < data.length; i++) {
				var conteudo = "<option value=\"";
				conteudo += data[i].id;
				conteudo += "\">";
				conteudo += data[i].nome;
				conteudo += "</option>";
				$("#selectCoordenador").append(conteudo);
			}
		}
	});

	$.ajax({
		url: "/curso/tipo",
		type: "GET",
		success: function (data) {
			for (var i = 0; i < data.length; i++) {
				var conteudo = "<option value=\"";
				conteudo += data[i].id;
				conteudo += "\">";
				conteudo += data[i].identificacao;
				conteudo += "</option>";
				$("#selectTipo").append(conteudo);
			}
		}
	});
	

	$("#frmCurso").on("submit", function (e) {
		e.preventDefault();
		var form = $(this);
		$.ajax({
			url: "/curso",
			type: "POST",
			data: {
				id: form.find("input[name='id']").val(),
				identificacao: form.find("input[name='identificacao']").val(),
				tipo: form.find("#selectTipo").val(),
				coordenador: form.find("#selectCoordenador").val(),
				ativo: form.find("input[name='ativo']").prop("checked") ? true : false
			}
		})
		.done(function () {
			window.location.href = "/curso";
		});
	});

	$(".btnAtualizarCurso").on("click", function () {
		let resposta = confirm("Deseja realmente atualizar?");
		if (resposta) {
			let valor = this.value;
			$.ajax({
				url: "/curso/" + valor,
				type: "GET",
				success: function (data) {
					$("#id").val(data.id);
					$("#identificacao").val(data.identificacao);
					$("#selectTipo").find("option[value='" + data.tipoid + "']").attr("selected", "selected");
					$("#selectCoordenador").find("option[value='" + data.coordenadorid + "']").attr("selected", "selected");
					if (Boolean(data.ativo)) {
						$("#ativo").prop("checked", true);
					} else {
						$("#ativo").prop("checked", false);
					}
				}
			});
		}
	});

	$(".btnDeletarCurso").on("click", function () {
		let resposta = confirm("Deseja realmente deletar?");
		if (resposta) {
			if (this.value != "") {
				var valor = this.value;
				$.ajax({
					url: "/curso/" + valor,
					type: "DELETE"
				})
				.done(function () {
					window.location.href = "/curso";
				});
			}
		}
	});
});