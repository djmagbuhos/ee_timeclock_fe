$(document).ready(function () {
    //LOG IN MODAL
    $("#loginModal").hide();

    $(".ci-btn").on("click", function () {
        $("#loginModal").fadeIn();
    });

    $(".close").on("click", function () {
        $("#loginModal").fadeOut();
    });

    $(window).on("click", function (event) {
        if ($(event.target).is("#loginModal")) {
            $("#loginModal").fadeOut();
        }
    });

    // LOG OUT MODAL
    $("#logoutModal").hide();

    $(".co-btn").on("click", function () {
        $("#logoutModal").fadeIn();
    });

    $(".close").on("click", function () {
        $("#logoutModal").fadeOut();
    });

    $(window).on("click", function (event) {
        if ($(event.target).is("#logoutModal")) {
            $("#logoutModal").fadeOut();
        }
    });

    // EDIT TIME MODAL
    $("#editModal").hide();

    $(".edit-rec-btn").on("click", function () {
        $("#editModal").fadeIn();
    });

    $(".close").on("click", function () {
        $("#editModal").fadeOut();
    });

    $(window).on("click", function (event) {
        if ($(event.target).is("#editModal")) {
            $("#editModal").fadeOut();
        }
    });

    // ADD TIME MODAL
    $("#addModal").hide();

    $("#sr-addtime").on("click", function () {
        $("#addModal").fadeIn();
    });

    $(".close").on("click", function () {
        $("#addModal").fadeOut();
    });

    $(window).on("click", function (event) {
        if ($(event.target).is("#addModal")) {
            $("#addModal").fadeOut();
        }
    });

    // ADD TIME MODAL
    $("#viewModal").hide();

    $(".view-rec-btn").on("click", function () {
        $("#viewModal").fadeIn();
    });

    $(".close").on("click", function () {
        $("#viewModal").fadeOut();
    });

    $(window).on("click", function (event) {
        if ($(event.target).is("#viewModal")) {
            $("#viewModal").fadeOut();
        }
    });
});
