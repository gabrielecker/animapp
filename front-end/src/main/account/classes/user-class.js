import DefaultClass from '../../app/classes/default-class';


export default class User extends DefaultClass{
	constructor(){
		
		const properties = [
		{
			name: 'id',
			defaultValue: null
		},
		{
			name: 'firstName',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'lastName',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'email',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'phoneNumber',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'alternatePhoneNumber',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'facebookURL',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'googlePlusURL',
			defaultValue: '',
			type: 'String'
		},
				{
			name: 'pets',
			defaultValue: [],
			type: 'Array'
		},
		]
		
		super(properties);
	}
}