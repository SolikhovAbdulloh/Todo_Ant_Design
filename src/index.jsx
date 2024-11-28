import { Div } from "../style";
import { Button, Form, Input } from "antd";
import { useReducer, useState } from "react";
const { Search } = Input;

function App() {
  const [search, setSearch] = useState("");
  const [form] = Form.useForm(); 
  const reducer = (state, { type, newtext }) => {
    switch (type) {
      case "add":
        return [...state, newtext];

      case "edit":
        return state.map((item) =>
          item.id === newtext.id ? { ...item, ism: newtext.ism } : item
        );

      case "delete":
        return state.filter((value) => value.id !== newtext.id);

      default:
        return state;
    }
  };

  const Initilstate = [];
  const [state, dispatch] = useReducer(reducer, Initilstate);

  const [newIsm, setNewIsm] = useState("");

  const submit = (e) => {
    const newtext = {
      id: Date.now(),
      ism: e.ism,
    };
    dispatch({ type: "add",newtext});
      form.resetFields();
  };

  const Update = (id) => {
    const newtext = { id, ism: newIsm };
    dispatch({ type: "edit", newtext  });
  };

  const deleteItem = (id) => {
    dispatch({ type: "delete", newtext: { id } });
  };
const filtered = state.filter((value) =>
  value.ism.toLowerCase().includes(search.toLowerCase())
);
  return (
    <Div className="flex justify-center items-center flex-col gap-2">
      <Search
        placeholder="Qidiruv"
        enterButton="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-[50%]"
      />
      <Form onFinish={submit} form={form} className="w-[50%] flex gap-3 m-auto">
        <Form.Item
          name={"ism"}
          rules={[{ required: true, message: "Iltimos so'z kiriting...." }]}
          className="flex flex-col gap-3 w-[100%]"
        >
          <Input
            className="h-[40px]"
            size="middle"
            placeholder="So'z kiriting"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="h-[40px]">
          Add
        </Button>
      </Form>

      <div>
        {filtered.map((value) => (
          <div key={value.id} className="flex gap-2">
            
            <p>{value.ism}</p>
            <Input
              type="text"
              value={newIsm}
              onChange={(e) => setNewIsm(e.target.value)}
            />
            <Button
              type="dashed"
              onClick={() => Update(value.id)}
              color="danger"
              className="h-[40px]"
            >
              Update
            </Button>
            <Button
              type="dashed"
              onClick={() => deleteItem(value.id)}
              color="danger"
              className="h-[40px]"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </Div>
  );
}

export default App;
