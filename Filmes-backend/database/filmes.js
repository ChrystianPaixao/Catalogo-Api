import { DataTypes} from "sequelize";
import dataBase from "./db.js";

const Filme = dataBase.define('filmes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true 
    },

    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.TEXT,
    },

    anoLancamento: {
        type: DataTypes.DATE,
    },

    genero: {
        type: DataTypes.STRING,
    },

    posterUrl: {
        type: DataTypes.STRING,
        validate: { isUrl: true }
    }
});

export default Filme;