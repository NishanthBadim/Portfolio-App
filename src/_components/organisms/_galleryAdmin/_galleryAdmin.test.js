import React from "react";
import { create } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import GalleryAdmin from "./_galleryAdmin";
import { fireEvent, render } from "@testing-library/react";

const images = [
    {
        id: "1",
        name: "Alienware",
        url:
            "data:image/png;base64,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",
    },
    {
        id: "2",
        name: "Sony",
        url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWXoLhb1QGq1B52D9rNOdWzmIdy0IVkmKk9Q&usqp=CAU",
    }
];
describe("renders gallery ", () => {
    test("Matches the snapshot", () => {
        const input = create(<GalleryAdmin allImages={images} isAdmin={true} />);
        expect(input.toJSON()).toMatchSnapshot();
    });

    test("Add Image to the Gallery", () => {
        jest.mock("../../molecules/_addImage/_addImage", () => ({
            __esModule: true,
            default: () => <div>Add image box</div>
        }));

        const mockImageAdd = jest.fn();
        const mockImageEdit = jest.fn()
        const mockImageDelete = jest.fn()
        const { getByText,getAllByText,container } = render(<GalleryAdmin allImages={images} isAdmin={true} setAllImages={mockImageAdd} />)
        const buttonAdd = getByText('Add image')
        fireEvent.click(buttonAdd)
        expect(container.textContent).toMatch('Alienware')
        //const buttonEdit = getAllByText('Edit')
        //fireEvent.click(buttonEdit[0])
        //expect(mockImageEdit).toHaveBeenCalledTimes(1)
    })
});