import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, errors, saving}) => {
    return(
        <form>
            <h1>Manage Course</h1>
            <TextInput name="title" label="Title" value={course.title} onChange={onChange} error={errors.title}/>
            <SelectInput name="authorId" label="Author" defaultOption="Select Author" value={course.authorId} options={allAuthors} onChange={onChange} error={errors.authorId}/>
            <TextInput name="category" label="Category" value={course.category} onChange={onChange} error={errors.category} />
            <TextInput name="length" label="Length" value={course.length} onChange={onChange} error={errors.length} />
            <input type="submit" value= {saving ? "Saving..." : "Save"} disabled={saving} className="btn btn-primary" onClick={onSave}/>
        </form>
    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object,
    saving: React.PropTypes.bool
};

export default CourseForm;