import Loading from "@/components/Loading";

// 异步组件
const asyncComponent = asyncFun => {
  const component = () => ({
    component: asyncFun(),
    loading: Loading
  });
  return {
    //   必须提供一个render 函数
    render(h) {
      return h(component);
    }
  };
};

export default asyncComponent;
