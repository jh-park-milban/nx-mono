import styled from "@emotion/styled";
import { replaceUrl } from "@moyo-fe/url";
import { useState } from "react";

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const [input, setInput] = useState("");
  return (
    <StyledPage>
      <div>url을 포함해 입력하면 url이 대체됩니다.</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInput((prev) =>
            replaceUrl(prev, (url) => "url 없어지고 이걸로 대체됐어요!"),
          );
        }}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button>url 대체해버리기</button>
      </form>
    </StyledPage>
  );
}

export default Index;
