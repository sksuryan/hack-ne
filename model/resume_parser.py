import spacy
import pickle
import random

train_data = pickle.load(open('train_data.pkl','rb'))

# Load Blank Model
nlp = spacy.blank('en')

def train_model(train_data):
    # Remove all pipelines and add NER pipeline from the model
    if 'ner'not in nlp.pipe_names:
        ner = nlp.create_pipe('ner')
        # adding NER pipeline to nlp model
        nlp.add_pipe(ner,last=True)
    
    #Add labels in the NLP pipeline
    for _, annotation in train_data:
        for ent in annotation.get('entities'):
            ner.add_label(ent[2])
    
    #Remove other pipelines if they are there
    other_pipes = [pipe for pipe in nlp.pipe_names if pipe != 'ner']
    with nlp.disable_pipes(*other_pipes):  # only train NER
        optimizer = nlp.begin_training()
        for itn in range(200): # train for 10 iterations
            print("Starting iteration " + str(itn))
            random.shuffle(train_data)
            losses = {}
            index = 0
            for text, annotations in train_data:
                try:
                    nlp.update(
                        [text],  # batch of texts
                        [annotations],  # batch of annotations
                        drop=0.2,  # dropout - make it harder to memorise data
                        sgd=optimizer,  # callable to update weights
                        losses=losses)
                except Exception as e:
                    pass
                
            print(losses)
# Start Training model
#train_model(train_data)

# Saving the model
#nlp.to_disk('nlp_ner_model')


