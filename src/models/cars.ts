import { Schema, model } from 'mongoose'

const schema = new Schema(
	{
		/**
		 * название машины.
		 */
		name: {
			type: String,
			required: true
		},
		/**
		 * номер машины.
		 */
		carNumber: {
			type: String,
			required: true,
			unique: true
		},
		/**
		 * количество топлива.
		 */
		fuelAmount: {
			type: Number,
			default: 0
		},
		/**
		 * стоимость аренды в час.
		 */
		hourlyRate: {
			type: Number,
			default: 0
		},
		/**
		 * доступность машины для аренды.
		 */
		availability: {
			type: Boolean,
			default: true
		},
		/**
		 * Полноое описание машины.
		 */
		description: {
			type: String
		},
		/**
		 * фото машины с четырех сторон.
		 */
		photos: {
			/**
			 * фото спереди.
			 */
			front: String,
			/**
			 * фото сзади.
			 */
			back: String,
			/**
			 * фото слева.
			 */
			left: String,
			/**
			 * фото справа.
			 */
			right: String
		},
		/**
		 * характеристики машины
		 */
		characteristics: {
			/**
			 * тип коробки передач.
			 */
			transmission: String,
			/**
			 * цвет машины.
			 */
			color: String,
			/**
			 * пробег машины.
			 */
			mileage: Number,
			/**
			 * класс машины.
			 */
			class: String,
			/**
			 * тип привода (например, передний, задний, полный).
			 */
			driveType: String,
			/**
			 * объем двигателя.
			 */
			engineVolume: Number,
			/**
			 * мощность двигателя.
			 */
			power: Number,
			/**
			 * вместительный багажник.
			 */
			largeTrunk: Boolean,
			/**
			 * наличие сенсорного экрана.
			 */
			touchscreen: Boolean,
			/**
			 * наличие подогрева руля.
			 */
			heatedSteeringWheel: Boolean,
			/**
			 * наличие подогрева сидений.
			 */
			heatedSeats: Boolean,
			/**
			 * наличие парктроников.
			 */
			parkingSensors: Boolean
		}
	},
	{
		timestamps: true
	}
)

export default model('Cars', schema)

// export default CarsModel
