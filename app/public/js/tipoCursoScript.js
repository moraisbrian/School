$(document).ready(function() {
	$("#btnSair").on("click", function () {
		window.location.href = "/autenticar/sair";
	});
    
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

	$("#frmTipoCurso").on("submit", function (e) {
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
		.done(function () {
			window.location.href = "/tipocurso";
		});
	});
});