$(document).ready(function() {
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
});