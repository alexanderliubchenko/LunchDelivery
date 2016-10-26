module.exports = function (sequelize, DataTypes) {
	const model = sequelize.define('Dish', {
		name: DataTypes.STRING,
		description: DataTypes.TEXT,
		price: DataTypes.FLOAT
	},{
		freezeTableName: true,
		classMethods: {
			associate: function (db) {
				db.Dish.hasMany(db.Order, {
					as: 'orders'
				});
			}
		}
	});

	return model;
};