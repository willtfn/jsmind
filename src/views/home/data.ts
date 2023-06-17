export default {
  id: "0",
  title: "罔极空间设计",
  leftNodes: [
    {
      id: "1",
      title: "问题1",
      color: "#fff",
      bgColor: "#ff9966",
      children: [
        { id: "1-1", title: "空调风口" },
        { id: "1-2", title: "空调风口" },
        { id: "1-3", title: "空调风口" }
      ]
    },
    {
      id: "2",
      title: "第一级",
      color: "#fff",
      bgColor: "#6666ff",
      children: [
        {
          id: "2-1",
          title: "第二级",
          children: [
            { id: "2-1-1", title: "空调风口" },
            {
              id: "2-1-2",
              title: "第三级",
              children: [
                { id: "2-1-2-1", title: "第四级" },
                { id: "2-1-2-2", title: "沟通平面" },
                { id: "2-1-2-3", title: "沟通平面" }
              ]
            },
            { id: "2-1-3", title: "空调风口" }
          ]
        },
        { id: "2-2", title: "空调风口" },
        { id: "2-3", title: "空调风口" }
      ]
    }
  ],
  rightNodes: [
    {
      id: "3",
      title: "问题3",
      color: "#fff",
      bgColor: "#339966",
      children: [
        { id: "3-1", title: "空调风口" },
        { id: "3-2", title: "空调风口" },
        { id: "3-3", title: "空调风口" },
        { id: "3-4", title: "空调风口" },
        { id: "3-5", title: "空调风口" }
      ]
    },
    {
      id: "4",
      title: "问题4",
      color: "#fff",
      bgColor: "#ff3399",
      children: [
        { id: "4-1", title: "空调风口" },
        { id: "4-2", title: "空调风口" }
      ]
    }
  ]
}
