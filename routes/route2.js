var route2 = function(router) {

    // ROUTES
    router.get('/', function(req, res) {
	res.render('page2');
    });

    return router;
};

module.exports = route2;
