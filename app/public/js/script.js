$(document).ready(function () {
	$("#btnInicio").on("click", function () {
		window.location.href = "/";
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
					window.location.reload();
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
});
