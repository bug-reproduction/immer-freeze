import {it, describe} from 'vitest'
import {createDraft, finishDraft} from 'immer';


describe('immer freeze', function () {
    it('should not freeze original object', function() {
        const obj = {
            list: []
        }
        const draft = createDraft(obj);
        draft.list.push("one")
        const final = finishDraft(draft);
        console.log("same instance?", final == obj)
        obj.list.push("two");
    })

    it('should not freeze original object even if no changes were made to the draft', function() {
        const obj = {
            list: []
        }
        const draft = createDraft(obj);
        const final = finishDraft(draft);
        console.log("same instance?", final == obj)
        obj.list.push("one");
    });
})
