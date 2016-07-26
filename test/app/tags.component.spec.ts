import {
    it,
    inject,
    beforeEachProviders,
    describe,
    expect
} from '@angular/core/testing';

import {Tags} from '../../src/app/components/dashboard/tags.component'

describe("Tags test", function () {

    beforeEachProviders(() => [
        Tags
    ]);

    it("Single tag is correctly generated", inject([Tags], (tagsComponent:Tags) => {
        tagsComponent.current = "first tag";

        var enterEvent = {keyCode: 13};
        tagsComponent.createTagFromKeyEvent(enterEvent);

        expect(tagsComponent.tags[0]).toBe("first tag");
        expect(tagsComponent.current).toBe("");
    }));

    it("Multiple tags are correctly generated", inject([Tags], (tagsComponent:Tags) => {
        var event = {keyCode: 13};

        tagsComponent.current = "first tag";
        tagsComponent.createTagFromKeyEvent(event);
        expect(tagsComponent.tags[0]).toBe("first tag");
        expect(tagsComponent.current).toBe("");

        tagsComponent.current = "second tag";
        tagsComponent.createTagFromKeyEvent(event);
        expect(tagsComponent.tags[1]).toBe("second tag");
        expect(tagsComponent.current).toBe("");

    }));

    it("Tags are correctly removed on 'backspace'", inject([Tags], (tagsComponent:Tags) => {
        var enterEvent = {keyCode: 13};

        tagsComponent.current = "first tag";
        tagsComponent.createTagFromKeyEvent(enterEvent);

        tagsComponent.current = "second tag";
        tagsComponent.createTagFromKeyEvent(enterEvent);

        var backspaceEvent = {keyCode: 8};
        tagsComponent.createTagFromKeyEvent(backspaceEvent);
        expect(tagsComponent.tags[1]).toBe(undefined);

    }));

});