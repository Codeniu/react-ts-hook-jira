# emotion

The [@emotion/styled](https://www.npmjs.com/package/@emotion/styled) package is for those who prefer to use the `styled.div` style API for creating components.

**[`@emotion/styled` documentation](https://emotion.sh/docs/styled)**

```js
import styled from "@emotion/styled";

export const UnauthenticatedApp = () => {
  return (
    <Container>
      <ShadowCard>
       // your code
      </ShadowCard>
    </Container>
  );
};

// Card 第三方组件
const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

// div原生标签
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
```



[@emotion/react](https://emotion.sh/docs/introduction)

How to use?

需要在文件头部加上类型注解。

```js
/** @jsxImportSource @emotion/react */ react版本大于17

/** @jsx jsx */ react版本小于17

<div css={{ marginBottom: "2rem" }} />
```

类似于style标签，不同的地方在于，CSS标签中你可以写嵌套，可以使用伪元素等。例如：

```js
const color = 'white'

<div css={{
    padding: 32px;
    backgroundColor: hotpink;
    fontSize: 24px;
    borderRadius: 4px;
    &:hover {
    color: ${color};
    }
}} />
```

