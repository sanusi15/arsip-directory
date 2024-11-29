import axios from "axios";
import {
  MdArrowDropDown,
  MdOutlineDashboard,
  MdOutlineFilterList,
  MdUploadFile,
  MdCreateNewFolder,
  MdOutlineCreateNewFolder
} from "react-icons/md";
const ActionBarDirectory = () => {
  const uploadFile = async (e) => {
    try {
      const files = e.target.files;
      if (!files.length) return;
      const formData = new FormData();
      for (const item of files) {
        formData.append("file", item);
      }
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      if (response.status === 200) {
        console.log(response.data.data);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };
  return (
    <div className="w-full h-10 bg-stone-50 border-b border-slate-200 flex items-center justify-between gap-2 px-2">
      <div className="flex items-center justify-between gap-2 px-2">
        {/* Start dropdown upload */}
        <div
          className="flex items-center justify-between border border-slate-200 divide-x hover:cursor-pointer"
          data-dropdown-toggle="dropdownUpload"
        >
          <div className="py-1 px-2">
            <p className="text-xs text-slate-500">Upload</p>
          </div>
          <div className="py-1 px-2">
            <MdArrowDropDown className="text-md text-slate-500" />
          </div>
        </div>
        <div
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-max dark:bg-gray-700"
          id="dropdownUpload"
        >
          <ul className="py-2" aria-labelledby="dropdownDefaultButton">
            <li>
              <a
                href="#"
                className="flex items-center justify-start gap-2 px-4 py-1 text-xs text-slate-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.multiple = true;
                  input.click();
                  input.onchange = uploadFile;
                }}
              >
                <MdUploadFile className="text-lg" /> Upload File
              </a>
            </li>
          </ul>
        </div>
        {/* End dropdown upload */}
        {/* Start dropdown create */}
        <div
          className="flex items-center justify-between border border-slate-200 divide-x cursor-pointer"
          data-dropdown-toggle="dropdownCreate"
        >
          <div className="py-1 px-2">
            <p className="text-xs text-slate-500">Create</p>
          </div>
          <div className="py-1 px-2">
            <MdArrowDropDown className="text-md text-slate-500" />
          </div>
        </div>
        <div
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-md shadow w-max dark:bg-gray-700"
          id="dropdownCreate"
        >
          <ul className="py-2" aria-labelledby="dropdownDefaultButton">
            <li className="">
              <a
                href="#"
                className="flex items-center justify-start gap-2 px-4 py-1 text-xs text-slate-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <MdOutlineCreateNewFolder className="text-lg" /> Folder
              </a>
            </li>
          </ul>
        </div>
        {/* End dropdown create */}
        <div className="flex items-center justify-between border border-slate-200 divide-x cursor-pointer">
          <div className="py-1 px-2">
            <p className="text-xs text-slate-500">Action</p>
          </div>
          <div className="py-1 px-2">
            <MdArrowDropDown className="text-md text-slate-500" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-between border border-slate-200 divide-x">
          <div className="py-1 px-2">
            <MdOutlineDashboard className="text-md text-slate-500" />
          </div>
          <div className="py-1 px-2">
            <MdArrowDropDown className="text-md text-slate-500" />
          </div>
        </div>
        <div className="flex items-center justify-between border border-slate-200 divide-x">
          <div className="py-1 px-2">
            <MdOutlineFilterList className="text-md text-slate-500" />
          </div>
          <div className="py-1 px-2">
            <MdArrowDropDown className="text-md text-slate-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionBarDirectory;