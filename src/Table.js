import React from "react";
import Pagination from "./Pagination";
import {AiFillFileExcel} from "react-icons/ai"

function Table() {
  return (
    <div className="w-full border-2 mt-5">
      <div className="flex justify-evenly pt-5 pb-5">
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125 p-1 border-2 border-gray-400 rounded-sm">
          Name
        </h2>
        <h2 className="cursor-pointer transition duration-100 transform hover:scale-125  p-1 border-2 border-gray-400 rounded-sm ">
          Age
        </h2>
       
        <select
          className="cursor-pointer transition duration-100 transform hover:scale-125  p-1 border-2 border-gray-400 rounded-sm"
          name="school-names"
          id="schools-names"
        >
          <option value="rigatoni">School</option>
          <option value="lead">LEAD</option>
          <option value="pumpernickel">Any School</option>
          <option value="reeses">Any School</option>
        </select>

        {/* Class Dropdown */}
        <select
          className="cursor-pointer transition duration-100 transform hover:scale-125  p-1 border-2 border-gray-400 rounded-sm"
          name="school-names"
          id="schools-names"
        >
          <option value="rigatoni">Class</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        {/* Division Dropdown */}
        <select
          className="cursor-pointer transition duration-100 transform hover:scale-125  p-1 border-2 border-gray-400 rounded-sm"
          name="school-names"
          id="schools-names"
        >
          <option value="rigatoni">Division</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>

        <h2 className="cursor-pointer bg-gray-50 transition duration-100 transform hover:scale-75  p-1 border-2 border-blue-400 rounded-sm ">
          Search
        </h2>
      </div>
      <table className="w-full ">
        <thead className="bg-blue-500 border-b-2 border-blue-200 ">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              ID^
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Name
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Age
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              School
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Class
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Divison
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Status
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="p-3 text-sm text-gray-700">1</td>
            <td className="p-3 text-sm text-gray-700">Student Name</td>
            <td className="p-3 text-sm text-gray-700">10</td>
            <td className="p-3 text-sm text-gray-700">LEAD School Karmala</td>
            <td className="p-3 text-sm text-gray-700">3</td>
            <td className="p-3 text-sm text-gray-700">A</td>
            <td className="p-3 text-sm text-gray-700">Active</td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Edit
              </a>
            </td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Delete
              </a>
            </td>
          </tr>

          {/* 2nd */}

          <tr className="bg-blue-50">
            <td className="p-3 text-sm text-gray-700">2</td>
            <td className="p-3 text-sm text-gray-700">Student Name</td>
            <td className="p-3 text-sm text-gray-700">10</td>
            <td className="p-3 text-sm text-gray-700">LEAD School Karmala</td>
            <td className="p-3 text-sm text-gray-700">3</td>
            <td className="p-3 text-sm text-gray-700">A</td>
            <td className="p-3 text-sm text-gray-700">Active</td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Edit
              </a>
            </td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Delete
              </a>
            </td>
          </tr>

          {/* 3rd */}

          <tr className="bg-white">
            <td className="p-3 text-sm text-gray-700">3</td>
            <td className="p-3 text-sm text-gray-700">Student Name</td>
            <td className="p-3 text-sm text-gray-700">10</td>
            <td className="p-3 text-sm text-gray-700">LEAD School Karmala</td>
            <td className="p-3 text-sm text-gray-700">3</td>
            <td className="p-3 text-sm text-gray-700">A</td>
            <td className="p-3 text-sm text-gray-700">Active</td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Edit
              </a>
            </td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Delete
              </a>
            </td>
          </tr>

          {/* 4th */}

          <tr className="bg-blue-50">
            <td className="p-3 text-sm text-gray-700">4</td>
            <td className="p-3 text-sm text-gray-700">Student Name</td>
            <td className="p-3 text-sm text-gray-700">10</td>
            <td className="p-3 text-sm text-gray-700">LEAD School Karmala</td>
            <td className="p-3 text-sm text-gray-700">3</td>
            <td className="p-3 text-sm text-gray-700">A</td>
            <td className="p-3 text-sm text-gray-700">Active</td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Edit
              </a>
            </td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Delete
              </a>
            </td>
          </tr>

          {/* 5th */}

          <tr className="bg-white">
            <td className="p-3 text-sm text-gray-700">5</td>
            <td className="p-3 text-sm text-gray-700">Student Name</td>
            <td className="p-3 text-sm text-gray-700">10</td>
            <td className="p-3 text-sm text-gray-700">LEAD School Karmala</td>
            <td className="p-3 text-sm text-gray-700">3</td>
            <td className="p-3 text-sm text-gray-700">A</td>
            <td className="p-3 text-sm text-gray-700">Active</td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Edit
              </a>
            </td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Delete
              </a>
            </td>
          </tr>

          {/* 6th */}
          <tr className="bg-blue-50">
            <td className="p-3 text-sm text-gray-700">6</td>
            <td className="p-3 text-sm text-gray-700">Student Name</td>
            <td className="p-3 text-sm text-gray-700">10</td>
            <td className="p-3 text-sm text-gray-700">LEAD School Karmala</td>
            <td className="p-3 text-sm text-gray-700">3</td>
            <td className="p-3 text-sm text-gray-700">A</td>
            <td className="p-3 text-sm text-gray-700">Active</td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Edit
              </a>
            </td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Delete
              </a>
            </td>
          </tr>
          {/* 7th */}
          <tr className="bg-white">
            <td className="p-3 text-sm text-gray-700">7</td>
            <td className="p-3 text-sm text-gray-700">Student Name</td>
            <td className="p-3 text-sm text-gray-700">10</td>
            <td className="p-3 text-sm text-gray-700">LEAD School Karmala</td>
            <td className="p-3 text-sm text-gray-700">3</td>
            <td className="p-3 text-sm text-gray-700">A</td>
            <td className="p-3 text-sm text-gray-700">Active</td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Edit
              </a>
            </td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Delete
              </a>
            </td>
          </tr>

          {/* 8th */}

          <tr className="bg-blue-50">
            <td className="p-3 text-sm text-gray-700">8</td>
            <td className="p-3 text-sm text-gray-700">Student Name</td>
            <td className="p-3 text-sm text-gray-700">10</td>
            <td className="p-3 text-sm text-gray-700">LEAD School Karmala</td>
            <td className="p-3 text-sm text-gray-700">3</td>
            <td className="p-3 text-sm text-gray-700">A</td>
            <td className="p-3 text-sm text-gray-700">Active</td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Edit
              </a>
            </td>
            <td className="p-3 text-sm text-gray-700">
              <a href="/" className="font-bold text-blue-500 hover:underline">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
<div className="flex justify-around items-center ">
  <Pagination/>
  <button className="flex items-center p-1 border-2 bg-blue-300 border-gray-400 rounded-sm ">
<AiFillFileExcel className=""/>
 Download Excel</button>
</div>

    </div>
  );
}

export default Table;
