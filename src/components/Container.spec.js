import React from "react";
import { shallow, mount } from "enzyme";
import { Container } from "./Container";

describe("Container", () => {
    it("renders a default posts page", () => {
        const wrapper = mount(<Container/>);
        expect(wrapper).toMatchSnapshot();
    });

    describe("#addPost", () => {
        it("adds post to top-level state", () => {
            const wrapper = shallow(<Container/>);
            wrapper.instance().addPost({ title: "New", body: "Post" });
            expect(wrapper.state("posts")).toHaveLength(2);
        });
    });

    describe("#deletePost", () => {
        it("deletes post from top-level state", () => {
            const wrapper = shallow(<Container/>);
            wrapper.instance().deletePost(0);
            expect(wrapper.state("posts")).toHaveLength(0);
        });
    });
});
