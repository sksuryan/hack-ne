import sys, fitz
import spacy


nlp_model = spacy.load('nlp_ner_model')


def modify(filepath):
    doc = fitz.open(filepath)
    text = ""
    for page in doc:
        text = text + str(page.getText())
        tx = " ".join(text.split('\n'))
    dict = {}
    # Applying the model
    doc = nlp_model(tx)
    for ent in doc.ents:
        # print(f'{ent.label_.upper():{30}}- {ent.text}')
        dict.update({ent.label_.lower():ent.text})
    
    changed= tx.replace(dict['name'],"********")
    name = dict['name']
    # print(changed)
    f = open('results.txt', "w")
    f.write(changed)
    f.close()
