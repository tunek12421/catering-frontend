import React from "react";

const Table = ({ data, columns, renderImage, onEdit, onDelete }) => {
  console.log("Datos renderizados en la tabla:", data);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-2 text-gray-700 font-medium uppercase"
              >
                {col}
              </th>
            ))}
            <th className="px-4 py-2 text-gray-700 font-medium uppercase">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50 transition-colors"
            >
              {columns.map((col) => (
                <td key={col} className="px-4 py-2 text-sm text-gray-600">
                  {col === "image" && item[col]
                    ? renderImage(item[col])
                    : item[col] || "Sin información"}
                </td>
              ))}
              <td className="px-4 py-2 flex gap-3">
                <button
                  onClick={() => onEdit(item)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(item)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Table;
