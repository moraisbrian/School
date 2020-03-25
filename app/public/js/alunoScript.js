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
    
    $("#frmAluno").on("submit", function (e) {
		e.preventDefault();
		var form = $(this);
		$.ajax({
			url: "/aluno",
			type: "POST",
			data: {
				id: form.find("input[name='id']").val(),
				nome: form.find("input[name='nome']").val(),
				sobrenome: form.find("input[name='sobrenome']").val(),
				ativo: form.find("input[name='ativo']").prop("checked") ? true : false,
				cursoid: form.find("#selectCurso").val()
			}
		})
		.done(function () {
			window.location.href = "/aluno";
		});
	});

	
	$.ajax({
		url: "/aluno/curso",
		type: "GET",
		success: function (data) {
			for (var i = 0; i < data.length; i++) {
				var conteudo = "<option value=\"";
				conteudo += data[i].id;
				conteudo += "\">";
				conteudo += data[i].identificacao;
				conteudo += "</option>";
				$("#selectCurso").append(conteudo);
			}
		}
	});
	

	$(".btnAtualizarAluno").on("click", function () {
		let resposta = confirm("Deseja realmente atualizar?");
		if (resposta) {
			let valor = this.value;
			$.ajax({
				url: "/aluno/atualizar/" + valor,
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
					$("#selectCurso").find("option[value='" + data.cursoid + "']").attr("selected", "selected");
				}
			});
		}
	});

	$(".btnDeletarAluno").on("click", function () {
        let resposta = confirm("Deseja realmente deletar?");
        if (resposta) {
            if (this.value != "") {
                var valor = this.value;
                $.ajax({
                    url: "/aluno/" + valor,
                    type: "DELETE"
                })
                .done(function () {
                    window.location.href = "/aluno";
                });
            }
        }
    });
});