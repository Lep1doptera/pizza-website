import ProductCard from "./product-card";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Product card", () => {
  it("shows a button to order", () => {
    const onSubmitSpy = jest.fn();
    render(
      <ProductCard
        name="Lasagne"
        image="image"
        onSubmit={onSubmitSpy}
        cost={12.5}
      />
    );

    expect(screen.findByText("Order"));
  });

  it("submits with the correct item name, count, and price", async () => {
    const onSubmitSpy = jest.fn();

    render(
      <ProductCard
        name="Lasagne"
        image="/images/pasta.jpg"
        onSubmit={onSubmitSpy}
        cost={16.5}
      />
    );

    await fireEvent.click(await screen.findByText("Order"));
    await fireEvent.click(await screen.findByText("+"));
    await fireEvent.click(await screen.getByText("Add to Cart"));

    expect(onSubmitSpy).toHaveBeenCalledWith([
      { name: "Lasagne", count: 1, cost: 16.5 },
    ]);
  });

  it("should submit correct number of items after incrementing and removing", async () => {
    const onSubmitSpy = jest.fn();

    render(
      <ProductCard
        name="Lasagne"
        image="/images/pasta.jpg"
        onSubmit={onSubmitSpy}
        cost={16.5}
      />
    );

    await fireEvent.click(await screen.findByText("Order"));
    await fireEvent.click(await screen.findByText("+"));
    await fireEvent.click(await screen.findByText("+"));
    await fireEvent.click(await screen.findByText("-"));
    await fireEvent.click(await screen.findByText("+"));
    await fireEvent.click(await screen.findByText("-"));
    await fireEvent.click(await screen.findByText("+"));
    await fireEvent.click(await screen.findByText("+"));
    await fireEvent.click(await screen.getByText("Add to Cart"));

    expect(onSubmitSpy).toHaveBeenCalledWith([
      { name: "Lasagne", count: 3, cost: 16.5 },
    ]);
  });

  it("should submit correct number of different sized items after incrementing and removing", async () => {
    const onSubmitSpy = jest.fn();

    render(
      <ProductCard
        name="Margherita"
        image="/images/pizza.jpg"
        onSubmit={onSubmitSpy}
        sizes={[
          {
            size: "Small",
            cost: 10,
          },
          {
            size: "Large",
            cost: 18,
          },
        ]}
      />
    );

    await fireEvent.click(await screen.findByText("Order"));

    await fireEvent.click(await screen.getByLabelText("plus Small"));
    await fireEvent.click(await screen.getByLabelText("plus Small"));

    await fireEvent.click(await screen.getByLabelText("plus Small"));

    await fireEvent.click(await screen.getByLabelText("negative Small"));
    await fireEvent.click(await screen.getByLabelText("plus Large"));
    await fireEvent.click(await screen.getByLabelText("plus Large"));
    await fireEvent.click(await screen.getByLabelText("plus Large"));

    await fireEvent.click(await screen.getByText("Add to Cart"));

    expect(onSubmitSpy).toHaveBeenCalledWith([
      { name: "Margherita", count: 2, size: "Small", cost: 10 },
      { name: "Margherita", count: 3, size: "Large", cost: 18 },
    ]);
  });
});
