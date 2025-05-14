import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve ser capaz de postar corretamente", async () => {
    render(<PostComment />);

    function fazComentarios(numero: number) {
      const input = screen.getByTestId("txtarea-comentario");
      const btn = screen.getByTestId("btn-comentar");

      for (let i = 0; i < numero; i++) {
        fireEvent.change(input, {
          target: {
            value: `Comentário ${i + 1}`,
          },
        });
        fireEvent.click(btn);
      }
    }

    fazComentarios(2);
    expect(screen.getByText("Comentário 1")).toBeInTheDocument();
    expect(screen.getByText("Comentário 2")).toBeInTheDocument();
  });
});
