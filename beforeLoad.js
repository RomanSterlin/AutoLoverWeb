/* var before = function() {
    console.log("first");
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            $.ajax({
                url: 'https://localhost:44345/authUser',
                type: "POST",
                dataType: "text",
                xhrFields: { withCredentials: true },
                success: function(response) {
                    sessionStorage.setItem("username", response.split('@')[0]);
                    if (location.href == "https://localhost/dashboard.html") {
                        $.ajax({
                            url: 'https://localhost:44345/api/authServices',
                            type: "POST",
                            dataType: "JSON",
                            xhrFields: { withCredentials: true },
                            success: function(response) {
                                console.log("yay");
                                $.each(response.data, function(k, v) {
                                    console.log("loop");
                                    console.log(k + " " + v);
                                    var serviceFactory = new ServiceFactory();
                                    res = serviceFactory.create(v);
                                    console.log(res);
                                });
                            },
                            error: function(error, e, xhr) {
                                if (error.status == 405) {
                                    console.log(error + "this");
                                } else {
                                    console.log("No services");
                                }
                            }
                        });
                    }
                },
                error: function(error, e, xhr) {
                    console.log("no")
                    if (error.status == 405) {
                        console.log(error + "this");
                    } else {
                        console.log("other error");
                    }
                }

            });
        }
    };
}();

before(); */